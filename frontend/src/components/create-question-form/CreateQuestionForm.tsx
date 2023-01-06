import { FormHTMLAttributes } from 'react';
import { Card } from '../Card';

export const CreateQuestionForm = () => (
    <div>
        <Card<FormHTMLAttributes<HTMLFormElement>> onSubmit={() => {
            alert('Submitted');
        }} as={"form"}>
            <h3>New Question</h3>
        </Card>
    </div>
);
