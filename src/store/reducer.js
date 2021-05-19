export function counter(counter = 0, action){
  const {type} = action;
  switch(type){
    case 'INCREMENT':
      return counter + 1;
    case 'DECREMENT':
      return counter - 1;
    default:
      return counter;
  }
}