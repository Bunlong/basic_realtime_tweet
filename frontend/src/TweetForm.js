import React from 'react';
import { Field, reduxForm } from 'redux-form';

let TweetForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="text" component="input" type="text" />
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

TweetForm = reduxForm({
  form: 'TweetForm'
})(TweetForm);

export default TweetForm;
