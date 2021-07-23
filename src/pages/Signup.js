import React, { useState } from 'react';
import { GiBoxingGlove } from 'react-icons/gi';
import { MdError } from 'react-icons/md';
import {
    WelcomeContainer,
    CTA,
    SubActionContainer,
    SubAction,
    OutlineButtonLink
} from '../styling/WelcomeStyling';
import {
    ModalCircle
} from '../styling/ModalStyling';
import {
    SolidButton,
    SolidInput,
    StyledForm,
    StyledLabel,
    InlineErrorWrapper,
    InlineErrorIcon,
    InlineError
} from '../styling/PageStyling';
import { useForm } from "react-hook-form";

const Signup = () => {

    const [signupIsOpen, setSignupIsOpen] = useState(true);

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        mode: "onBlur"
    });

    const handleRegistration = (data) => {
        const username = data.email.substring(0, data.email.lastIndexOf("@"));
        console.log(data, username);
    };
    const handleError = (errors) => console.log(errors);

    const RegistrationValidation = {
        email: {
            required: "Please enter an email address",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Enter in the format: name@example.com"
            }
        },
        password: {
            required: "Please enter a password",
            minLength: {
                value: 6,
                message: "Passwords must be six or more characters"
            }
        }
    };

    return (
        <WelcomeContainer
            className="purple"
            isOpen={signupIsOpen}
            onRequestClose={() => setSignupIsOpen(true)}
            shouldCloseOnOverlayClick={false}
            closeTimeoutMS={200}
            contentLabel="modal">
            <ModalCircle className="purple">
                <GiBoxingGlove />
            </ModalCircle>
            <CTA>Sign up for a Ticket Punch account</CTA>

            <StyledForm onSubmit={handleSubmit(handleRegistration, handleError)}>
                <StyledLabel
                    htmlFor="email"
                >Email</StyledLabel>

                <SolidInput
                    type="email"
                    {...register('email', RegistrationValidation.email)}
                    name="email"
                    className={`purple ${errors.email ? "error" : null}`}
                />
                {errors.email ?
                    <InlineErrorWrapper>
                        <InlineErrorIcon>
                            <MdError />
                        </InlineErrorIcon>
                        <InlineError>{errors.email.message}</InlineError>
                    </InlineErrorWrapper>
                    : null}

                <StyledLabel
                    htmlFor="password"
                >Password</StyledLabel>

                <SolidInput
                    type="password"
                    {...register('password', RegistrationValidation.password)}
                    name="password"
                    className={`purple ${errors.password ? "error" : null}`}
                />
                {errors.password ?
                    <InlineErrorWrapper>
                        <InlineErrorIcon>
                            <MdError />
                        </InlineErrorIcon>
                        <InlineError>{errors.password.message}</InlineError>
                    </InlineErrorWrapper>
                    : null}

                <SubActionContainer>
                    <SolidButton
                        type="submit"
                        className="purple"
                        disabled={!isValid}
                    >Sign Up</SolidButton>
                </SubActionContainer>
            </StyledForm>

            <SubActionContainer>
                <SubAction>Already have an account?</SubAction>
                <OutlineButtonLink
                    to="/login"
                    className="purple"
                >Sign In</OutlineButtonLink>
            </SubActionContainer>
        </WelcomeContainer >
    );
};

export default Signup;
