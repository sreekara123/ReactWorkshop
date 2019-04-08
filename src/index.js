import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                Are you sure you want to do this?
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Sam" date="Today at 7PM" comment="learning React" avatar={faker.image.avatar()}/>
            </ApprovalCard>
           <ApprovalCard>
                 <CommentDetail author="Mark" date="Today at 9PM" comment="Great, How's it going" avatar={faker.image.avatar()}/>
           </ApprovalCard>
           
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));