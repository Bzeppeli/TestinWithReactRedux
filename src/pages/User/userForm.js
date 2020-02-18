import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

const UserFormFunc = props => {
    return (
        <form>
            <label>
                Name
            </label>
            <input type="text" component="input" name="name"/>
        </form>
    );
}

const UserForm = (reduxForm({
    form: 'formUser'
}))(UserFormFunc);

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(UserForm);