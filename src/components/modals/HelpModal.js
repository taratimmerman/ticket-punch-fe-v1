import React from 'react';

import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { IoHelpCircleOutline } from 'react-icons/io5';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { msgDevAction } from '../../actions/helpActions';
import { openHelpModalAction, closeHelpModalAction } from '../../actions/modalActions';
import {
    ModalContainer,
    ModalCircle,
    ModalAction,
    ModalDetails,
    ModalButtonContainer
} from '../../styling/ModalStyling';
import {
    SolidInput,
    SolidTextArea,
    StyledForm,
    StyledLabel
} from '../../styling/PageStyling';
import Button from '../button/Button';
import ErrorMessage from '../errors/ErrorMessage';
import InlineErrorMessage from '../errors/InlineErrorMessage';
import SuccessMessage from '../SuccessMessage';

const HelpModal = ({ closeHelpModalAction, showHelpModal, msgDevAction }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode: "onBlur"
    });

    let errorMessage;
    let successMessage;

    const handleMsgDev = (message) => {
        console.log(message);
        const name = message.name.trim();
        const email = message.email.trim();
        const question = message.question.trim();

        msgDevAction(name, email, question);
        reset();
    };

    const handleError = (errors) => console.log(errors);

    const msgDevValidation = {
        name: {
            required: "Please enter your name",
            maxLength: {
                value: 140,
                message: "Please adjust your name to be less than 140 characters"
            },
            minLength: {
                value: 2,
                message: "Name input must be at least 2 characters"
            }
        },
        email: {
            required: "Please enter your email address",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Enter in the format: name@company.com"
            }
        },
        question: {
            required: "Please enter your question",
            maxLength: {
                value: 300,
                message: "Please adjust your question to be less than 300 characters"
            }
        }
    };

    return (
        < ModalContainer
            className="yellow"
            isOpen={showHelpModal}
            onRequestClose={() => closeHelpModalAction()}
            closeTimeoutMS={200}
            contentLabel="modal"
        >
            <ModalCircle className="yellow">
                <IoHelpCircleOutline />
            </ModalCircle>
            <ModalAction>Questions?</ModalAction>
            <ModalDetails>Contact the dev!</ModalDetails>

            <ErrorMessage error={errorMessage} />
            <SuccessMessage success={successMessage} />

            <StyledForm onSubmit={handleSubmit(handleMsgDev, handleError)}>
                <StyledLabel
                    htmlFor="name"
                >
                    Name
                </StyledLabel>
                <SolidInput
                    type="text"
                    {...register("name", msgDevValidation.name)}
                    name="name"
                    className={`yellow ${errors.name ? "error" : null}`}
                    placeholder="Enter your name"
                />
                {errors.name ?
                    <InlineErrorMessage inlineErrorMessage={errors.name.message} />
                    : null}

                <StyledLabel
                    htmlFor="email"
                >
                    Email
                </StyledLabel>
                <SolidInput
                    type="email"
                    {...register("email", msgDevValidation.email)}
                    email="email"
                    className={`yellow ${errors.email ? "error" : null}`}
                    placeholder="Enter your email"
                />
                {errors.email ?
                    <InlineErrorMessage inlineErrorMessage={errors.email.message} />
                    : null}

                <StyledLabel
                    htmlFor="question"
                >Question/Message</StyledLabel>

                <SolidTextArea
                    type="text"
                    {...register('question', msgDevValidation.question)}
                    name="question"
                    className={`yellow ${errors.question ? "error" : null}`}
                    placeholder="Enter your question/message"
                />
                {errors.question ?
                    <InlineErrorMessage inlineErrorMessage={errors.question.message} />
                    : null}

                <ModalButtonContainer>
                    <Button
                        type="submit"
                        className="yellow"
                        text={"Email Tara"}
                    />
                </ModalButtonContainer>
            </StyledForm>

            <ModalButtonContainer>
                <Button
                    className="yellow secondary"
                    onClick={() => closeHelpModalAction()}
                    text={"Cancel"}
                />
            </ModalButtonContainer>

        </ModalContainer >
    );
};

HelpModal.propTypes = {
    closeHelpModalAction: PropTypes.func,
    showHelpModal: PropTypes.bool,
    msgDevAction: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        showHelpModal: state.modalReducer.showHelpModal
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        openHelpModalAction: openHelpModalAction,
        closeHelpModalAction: closeHelpModalAction,
        msgDevAction: msgDevAction
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HelpModal);
