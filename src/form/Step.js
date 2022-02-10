import React from 'react';
import { useForm, useState, useStep } from 'react-hooks-helper';

const defaultData = {
    fullname: "",
    pob: "",
    email: "",
    gender: "",
    dateofBirth: "",
    phone: "",
};

const steps = [
    { id : 'biodata' },
    { id : 'disc' },
    { id : 'wpt' },
];

export const MultiStepForm = () => {
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({
        steps,
        initialStep: 0,
    })

    console.log(step)

    return(
        <div>
            <h3>Step</h3>
        </div>
    );
};


