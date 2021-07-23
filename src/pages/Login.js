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

const Login = () => {

    const [loginIsOpen, setLoginIsOpen] = useState(true);
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        mode: "onBlur"
    });

    const handleLogin = (data) => console.log(data);
    const handleError = (errors) => console.log(errors);

    const LoginValidation = {
        email: {
            required: "Please enter your email"
        },
        password: {
            required: "Please enter your password"
        }
    };

    return (
        <WelcomeContainer
            className="purple"
            isOpen={loginIsOpen}
            onRequestClose={() => setLoginIsOpen(true)}
            shouldCloseOnOverlayClick={false}
            closeTimeoutMS={200}
            contentLabel="modal">
            <ModalCircle className="purple">
                <GiBoxingGlove />
            </ModalCircle>
            <CTA>Sign in to your Ticket Punch account</CTA>

            <StyledForm onSubmit={handleSubmit(handleLogin, handleError)}>
                <StyledLabel
                    htmlFor="email"
                >Email</StyledLabel>

                <SolidInput
                    type="email"
                    {...register('email', LoginValidation.email)}
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
                    {...register('password', LoginValidation.password)}
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
                    >Sign In</SolidButton>
                </SubActionContainer>
            </StyledForm>

            <SubActionContainer>
                <SubAction>Need an account?</SubAction>
                <OutlineButtonLink to="/signup" className="purple">Sign Up</OutlineButtonLink>
            </SubActionContainer>
        </WelcomeContainer>
    );
};

export default Login;
