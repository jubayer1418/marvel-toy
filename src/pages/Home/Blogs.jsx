/* eslint-disable react/no-unescaped-entities */
const Blogs = () => {
  return (
    <>
      <div>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>
              {" "}
              An access token and refresh token are commonly used in
              authentication and authorization mechanisms, such as OAuth 2.0, to
              grant and manage access to protected resources on a server. An
              access token is a credential that is issued by an authentication
              server after a user successfully authenticates and authorizes an
              application. It is typically a string of characters that
              represents the user's identity and permissions. The access token
              is included in each request made by the client to the server to
              access protected resources. It serves as proof that the client is
              authorized to access those resources. On the other hand, a refresh
              token is also issued by the authentication server, along with the
              access token. Its purpose is to obtain a new access token when the
              current one expires without requiring the user to re-authenticate.
              The refresh token is typically long-lived and securely stored.
            </p>
          </div>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          Compare SQL and NoSQL databases?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable. SQL databases are table-based, while NoSQL
            databases are document, key-value, graph, or wide-column stores. SQL
            databases are better for multi-row transactions, while NoSQL is
            better for unstructured data like documents or JSON.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          What is express js? What is Nest JS?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            NestJS provides a more structured and opinionated approach, which
            can make it easier to build complex APIs with proper separation of
            concerns. Express, on the other hand, is more lightweight and
            flexible, which makes it a popular choice for simple or small-scale
            APIs.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          What is MongoDB aggregate and how does it work ?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            What is Aggregation in MongoDB? Aggregation is a way of processing a
            large number of documents in a collection by means of passing them
            through different stages. The stages make up what is known as a
            pipeline. The stages in a pipeline can filter, sort, group, reshape
            and modify documents that pass through the pipeline.
          </p>
        </div>
      </div>
    </>
  );
};

export default Blogs;
