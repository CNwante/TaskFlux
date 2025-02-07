export const taskReducer = (draft, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      if(action.title.trim() === "") {
        alert("Please, enter your task.");
        return;
      }

      draft.push({
        id: action.id,
        title: action.title,
        done: false
      })
      break;
    }

    case "CHANGE_TASK": {
      const index = draft.findIndex((t) => t.id === action.task.id);
      draft[index] = action.task;
      break;
    }

    case "DELETE_TASK": {
      const index = draft.filter((t) => t.id !== action.id);
      if(index !== -1) draft.splice(index, 1);
      break;
    }

    default: {
      throw Error('Unrecorganuzed action ' + action.type);
    }
  }
}

