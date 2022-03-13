import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { allActions } from '../redux/myReducer';
import { fetchUsers } from './../redux/myReducer';

const fullActions = { ...allActions, fetchUsers }
export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(fullActions, dispatch)
}
