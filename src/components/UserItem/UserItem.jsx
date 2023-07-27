import React from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../../Redux/slices/usersSlice";
import swal from "sweetalert";

export default function UserItem({firstname, lastname, email, _id}) {

  const dispatch = useDispatch()

  const removeUserHandler = () => {
    swal({
      title: "آیا از حذف این کاربر مطمئن هستید؟",
      icon: 'warning',
      buttons: ['خیر','بله']
    }).then(result => {
      if(result){
        dispatch(removeUser(_id))
        swal({
          title: "کاربر با موفقیت حذف شد",
          icon: 'success',
          buttons: "حله"
        })
      }
    })
  }

  return (
    <div className="uesrs__item">
      <div className="users__info">
        <img
          src="../../img/admin/profile/banana.png"
          alt="photo user"
          className="users__img"
        />
        <div className="users__details">
          <p className="users__name my-0">{firstname} {lastname}</p>
          <p lang="en" className="users__email">
            {email}
          </p>
        </div>
      </div>
      <div className="users__btns">
        <button className="btn-custome btn-custome--gray">پیام ها</button>
        <button className="btn-custome btn-custome__blue">اطلاعات</button>
        <button className="btn-custome btn-custome__red" onClick={removeUserHandler}>حذف</button>
      </div>
    </div>
  );
}
