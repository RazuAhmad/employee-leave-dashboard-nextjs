import React from 'react'
import Form from './Form';


const ApplicationForm = () => {

    return (
        <div className="pl-20 pr-[163px] pt-6 pb-14 bg-[#F2F0F4]">
            <div className="mb-16">
                <h3 className="mb-1">Application Form</h3>
                <p>Please fill the below form to apply</p>
            </div>

            {/* Application form  */}
            <Form />
        </div>
    )
}

export default ApplicationForm