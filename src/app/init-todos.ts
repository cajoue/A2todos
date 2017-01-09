export class Init {
  load(){
    if (localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined) {
      console.log('No Todos Found... Creating...');
      var todos = [
        {
          text: 'install Angular CLI'
        },
        {
          text: 'work through tutorial'
        },
        {
          text: 'keep up with the changes'
        }
      ];
      localStorage.setItem('todos', JSON.stringify(todos));
      return ;
    } else {
      console.log('Found Todos...');
    }
  }
}