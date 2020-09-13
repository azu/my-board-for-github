import { GraphQLClient } from "graphql-request";
import { env } from "../env";

export type fetchIssueOrPullRequestParam = {
    type: "issue" | "pr";
    owner: string;
    repo: string;
    number: string;
};

export interface User {
    login: string;
    avatar_url: string;
    html_url: string;
}

export interface Label {
    url: string;
    name: string;
    color: string;
    default: boolean;
}

export interface Assignee {
    login: string;
    avatar_url: string;
    html_url: string;
}

export interface Milestone {
    html_url: string;
    title: string;
    description: string;
    state: string;
    created_at: string;
    updated_at: string;
    due_on?: string | null;
    closed_at?: string | null;
}

export interface GitHubSearchResultItemJSON {
    html_url: string;
    id: string;
    number: number;
    title: string;
    user: User;
    labels: Label[];
    state: "merged" | "closed" | "open";
    locked: boolean;
    repository: {
        url: string;
    };
    assignees: Assignee[];
    milestone: Milestone | null;
    comments: number;
    created_at: string;
    updated_at: string;
    closed_at?: string | null;
    body: string | null;
    // computed from response
    type: "pr" | "issue";
}

type QueryResponse = {
    title: string;
    repository: {
        url: string;
    };
    comments: {
        totalCount: number;
        nodes: {
            url: string;
        }[];
    };
    id: string;
    number: number;
    author: {
        login: string;
        avatarUrl: string;
        url: string;
    };
    state: "OPEN" | "CLOSED" | "MERGED";
    locked: boolean;
    labels: {
        nodes: {
            name: string;
            description: string;
            color: string;
            isDefault: boolean;
            url: string;
        }[];
    };
    assignees: {
        nodes: {
            avatarUrl: string;

            login: string;
            id: string;
            url: string;
        }[];
    };
    milestone: {
        title: string;
        description: string;
        url: string;
        createdAt: string;
        updatedAt: string;
        dueOn?: string | null;
        closedAt: string | null;
        state: "OPEN" | "CLOSED";
    };
    createdAt: string;
    updatedAt: string;
    closedAt: string;
    url: string;
    body: string;
};

const convertState = (state: "OPEN" | "CLOSED" | "MERGED"): "open" | "closed" | "merged" => {
    switch (state) {
        case "OPEN":
            return "open";
        case "CLOSED":
            return "closed";
        case "MERGED":
            return "merged";
        default:
            return state;
    }
};
export const fetchIssueOrPullRequestWithSearchQuery = (param: {
    query: string;
}): Promise<GitHubSearchResultItemJSON[]> => {
    const graphQLClient = new GraphQLClient("https://api.github.com/graphql", {
        headers: {
            authorization: `Bearer ${env.token}`
        }
    });
    const query = `query Fetch($query: String!) {
  search(query: $query, type: ISSUE, first: 40) {
    nodes {
      __typename
      ... on PullRequest {
        repository {
          url
        }
        comments(last: 1) {
          totalCount
          nodes {
            url
          }
        }
        id
        title
        number
        author {
          login
          avatarUrl
          url
        }
        state
        locked
        labels(first: 10) {
          nodes {
            name
            description
            color
            isDefault
            url
          }
        }
        assignees(first: 10) {
          nodes {
            avatarUrl
            login
            id
            url
          }
        }
        milestone {
          title
          description
          url
          createdAt
          updatedAt
          dueOn
          closedAt
          state
        }
        createdAt
        updatedAt
        closedAt
        url
        body
      }
      ... on Issue {
        title
        repository {
          url
        }
        comments(last: 1) {
          totalCount
          nodes {
            url
          }
        }
        id
        number
        author {
          login
          avatarUrl
          url
        }
        state
        locked
        labels(first: 10) {
          nodes {
            name
            description
            color
            isDefault
            url
          }
        }
        assignees(first: 10) {
          nodes {
            avatarUrl
            login
            id
            url
          }
        }
        milestone {
          title
          description
          url
          createdAt
          updatedAt
          dueOn
          closedAt
          state
        }
        createdAt
        updatedAt
        closedAt
        url
        body
      }
    }
  }
}
`;
    const convertQueryResponseToGitHubSearchResult = (
        type: "pr" | "issue",
        response: QueryResponse
    ): GitHubSearchResultItemJSON => {
        return {
            type,
            assignees: response.assignees.nodes.map((node) => {
                return {
                    login: node.login,
                    avatar_url: node.avatarUrl,
                    html_url: node.url
                };
            }),
            repository: {
                url: response.repository.url
            },
            body: response.body,
            closed_at: response.closedAt,
            comments: response.comments.totalCount,
            created_at: response.createdAt,
            html_url: response.url,
            id: response.id,
            labels: response.labels.nodes.map((node) => {
                return {
                    color: node.color,
                    default: node.isDefault,
                    name: node.name,
                    url: node.url
                };
            }),
            locked: response.locked,
            milestone: response.milestone
                ? {
                      html_url: response.milestone.url,
                      title: response.milestone.title,
                      description: response.milestone.description,
                      created_at: response.milestone.createdAt,
                      updated_at: response.milestone.updatedAt,
                      closed_at: response.milestone.closedAt,
                      due_on: response.milestone.dueOn,
                      state: convertState(response.milestone.state)
                  }
                : null,
            number: response.number,
            state: convertState(response.state),
            title: response.title,
            updated_at: response.updatedAt,
            user: {
                avatar_url: response.author.avatarUrl,
                html_url: response.author.url,
                login: response.author.login
            }
        };
    };
    return graphQLClient
        .request(query, {
            query: param.query
        })
        .then((data) => {
            console.log("data", data);
            return data.search.nodes.map((node: any) => {
                return convertQueryResponseToGitHubSearchResult(node.__typename === "Issue" ? "issue" : "pr", node);
            });
        })
        .catch((error) => {
            console.error(error);
            return Promise.reject(error);
        });
};

export const fetchIssueOrPullRequest = (
    params: fetchIssueOrPullRequestParam[]
): Promise<GitHubSearchResultItemJSON[]> => {
    const graphQLClient = new GraphQLClient("https://api.github.com/graphql", {
        headers: {
            authorization: `Bearer ${env.token}`
        }
    });
    const queries = params
        .map((param, index) => {
            return `
  ${param.type}${param.number}${index}:  repository(owner: "${param.owner}", name: "${param.repo}") {
    ${param.type === "issue" ? "issue" : "pullRequest"}(number: ${param.number}) {
      title
      repository {
        url
      }
      comments(last:1){
        totalCount
        nodes{
          url
        }
      }
      id
      number
      author {
        login
        avatarUrl
        url
      }
      state
      locked
      labels(first: 10){
        nodes{
          name
          description
          color
          isDefault
          url
        }
      }
      assignees(first: 1) {
        nodes {
          avatarUrl
          login
          id
          url
        }
      }
      milestone {
        title
        description
        url
        createdAt
        updatedAt
        dueOn
        closedAt
        state
      }
      createdAt
      updatedAt
      closedAt
      url
      body
    }
  }
`;
        })
        .filter((query) => query !== undefined);
    const graphQLQuery = `{
${queries.join("\n")}
}`;
    const convertQueryResponseToGitHubSearchResult = (
        type: "pr" | "issue",
        response: QueryResponse
    ): GitHubSearchResultItemJSON => {
        return {
            type,
            assignees: response.assignees.nodes.map((node) => {
                return {
                    login: node.login,
                    avatar_url: node.avatarUrl,
                    html_url: node.url
                };
            }),
            repository: {
                url: response.repository.url
            },
            body: response.body,
            closed_at: response.closedAt,
            comments: response.comments.totalCount,
            created_at: response.createdAt,
            html_url: response.url,
            id: response.id,
            labels: response.labels.nodes.map((node) => {
                return {
                    color: node.color,
                    default: node.isDefault,
                    name: node.name,
                    url: node.url
                };
            }),
            locked: response.locked,
            milestone: response.milestone
                ? {
                      html_url: response.milestone.url,
                      title: response.milestone.title,
                      description: response.milestone.description,
                      created_at: response.milestone.createdAt,
                      updated_at: response.milestone.updatedAt,
                      closed_at: response.milestone.closedAt,
                      due_on: response.milestone.dueOn,
                      state: convertState(response.milestone.state)
                  }
                : null,
            number: response.number,
            state: convertState(response.state),
            title: response.title,
            updated_at: response.updatedAt,
            user: {
                avatar_url: response.author.avatarUrl,
                html_url: response.author.url,
                login: response.author.login
            }
        };
    };
    return graphQLClient
        .request(graphQLQuery)
        .then((data) => {
            return Object.keys(data).map((key) => {
                const dataType = /^issue/.test(key) ? "issue" : "pullRequest";
                const queryResponse = (data as any)[key][dataType] as QueryResponse;
                const typeKey = dataType === "issue" ? "issue" : "pr";
                return convertQueryResponseToGitHubSearchResult(typeKey, queryResponse);
            });
        })
        .catch((error) => {
            console.error(error);
            return Promise.reject(error);
        });
};
