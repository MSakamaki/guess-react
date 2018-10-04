import gql from "graphql-tag";
import * as React from 'react';
import { ChildProps, DataValue, graphql, OperationVariables } from "react-apollo";
import * as Markdown from 'react-markdown';

const query = gql`{
    contents(orderBy: id_DESC) {
      title
      author
      content
    }
  }`;

interface IContents {
  title: string;
  author: string;
  content: string;
}

interface IResponse {
  contents: IContents[];
}

const withCharacter = graphql<{}, IResponse>(query, {});

class Archives extends React.Component<ChildProps<{}, IResponse>> {
  public render() {
    const { loading, contents, error } = this.props.data as DataValue<IResponse, OperationVariables>;
    if (loading) { return <div>Loading</div>; }
    if (error) { return <h1>ERROR</h1>; }
    if (!contents) { return <h1>NO CONTENT!</h1>; }
    return (
      <div className="Archives">
        {contents.map((content, i) => (<Markdown key={i} source={content.content} />))}
      </div>
    );
  }
}

export default withCharacter(Archives);
