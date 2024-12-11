 import './Todo.css'
 
 export default function app() {
  const title = <h1>Todo list</h1>;
  const line = <hr/>;
  const input = <input type="text" placeholder="add item ..." className='input' />;
  const add = <div className='button'><button>add</button> </div>;
  const box1 = (
    <div className="box1">
      <h6>task1</h6>
      <div>
        <button>delete</button>
        <button>edit</button>
      </div>
    </div>
  );
  const box2 = (
    <div className="box2">
      <h6>task2</h6>
      <div>
        <button>delete</button>
        <button>edit</button>
      </div>
    </div>
  );
  const box3 = (
    <div className="box3">
      <h6>task3</h6>
      <div>
        <button>delete</button>
        <button>edit</button>
      </div>
    </div>
  );

  return (<div className='container2'>
    {title}
    {line}
    {input}
    {add}
    {box1}
    
    {box2}
    {box3}
    <h4> completed todo list</h4>
  </div>);
}
