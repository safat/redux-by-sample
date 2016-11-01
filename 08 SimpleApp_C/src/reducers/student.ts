import {actionsEnums} from '../common/actionsEnums';
import objectAssign = require('object-assign');
import {StudentEntity} from '../model/student';

class StudentState  {
  studentsList : StudentEntity[];

  public constructor()
  {
    this.studentsList = [];
  }
}

export const studentReducer =  (state : StudentState = new StudentState(), action) => {
      switch (action.type) {
        case actionsEnums.STUDENTS_GET_LIST_REQUEST_COMPLETED:
           return handleGetStudentList(state, action.payload);
      }

      return state;
};

const handleGetStudentList = (state : StudentState, payload : StudentEntity[]) => {
  const newState = objectAssign({}, state, {studentsList: payload});
  return newState;
}
