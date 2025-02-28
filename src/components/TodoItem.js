const TodoItem = () => {
  return (
    <li>
      <input type="checkbox" checked={false} onChange={() => console.log('changed')}>
      </input>
      <span>('')</span>
      <button onClick={() => console.log('removed')}>Удалить</button>
    </li>
  );
}

export default TodoItem;