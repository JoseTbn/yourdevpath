import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getRecentPosts = async () => {
  const query = gql`
  query GetPostDetails() {
    post(orderBy: createdAt_ASC
    last:3
    ){
      title
      feturedImage{
        url
      }
      createdAt
      slug
    }
  }
  `;
  const result = await request(graphqlAPI, query);

  return result.posts;
};


export const getSimilarPosts = async () => {
  const query = gql`
  query GetPostDetails($slug: String!, $categories: [String!]) {
    post(
      where: {slug_not: $slug, AND: {categories_some:{slug_in: $categories}}}
      last: 3
    ){
      title
      feturedImage{
        url
      }
      createdAt
      slug
    }
  }
  `;
  const result = await request(graphqlAPI, query,{slug, categories});

  return result.posts;
};

// request('https://api.graph.cool/simple/v1/movies', query).
// then((data) => console.log(data))