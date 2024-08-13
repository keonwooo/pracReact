export default function todoReducer(todo, action) {

  switch (action.type) {
      case 'updated': {
        break;
      }

      case 'added': {
        break;
      }

      case 'deleted': {
        break;
      }

      default: {
          throw Error(`알수없는 액션 타입: ${action.type}`);
      }
  }

}