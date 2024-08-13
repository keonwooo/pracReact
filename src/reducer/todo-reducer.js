export default function todoReducer(todo, action) {

  switch (action.type) {
      case 'updated': {
      }

      case 'added': {
      }

      case 'deleted': {
      }

      default: {
          throw Error(`알수없는 액션 타입: ${action.type}`);
      }
  }

}