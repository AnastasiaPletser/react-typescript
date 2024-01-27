interface MyButtonProps {
    text: string;
    handler: () => void;
}

export function MyButton(props: MyButtonProps){
    return <button onClick ={props.handler}>{props.text}</button>
}
