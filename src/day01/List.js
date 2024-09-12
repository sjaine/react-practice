export default function List() {
    const todos = ['Learn React', 'Build a Project', 'Master React'];

    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </ul>
    );
}