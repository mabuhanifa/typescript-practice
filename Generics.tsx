import React, { useState } from "react";

interface Props {
    name: string;
}

const HelloWorld: React.FC<Props> = ({ name }) => {
    const [state] = useState<{ fullname: string | null }>({ fullname: "" });

    return <div>hello {name}</div>;
};

interface FormProps<T> {
    values: T;
    children: (values: T) => JSX.Element;
}

const Form = <T extends {}>({ values, children }: FormProps<T>) => {
    return children(values);
};

const App: React.FC = () => {
    return (
        <div className="App">
            <Form<{ lastName: string | null }> values={{ lastName: "" }}>
                {values => <div>{values.lastName}</div>}
            </Form>
        </div>
    );
};

export default App;