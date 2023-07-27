import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../../Redux/slices/usersSlice";
import swal from "sweetalert";

export default function UserItem({firstname, lastname, email, _id, city, age, username}) {

  const dispatch = useDispatch()
  const [isShowModal, setIsShowModal] = useState(false)

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
    <>
       <div
        className={`modal ${isShowModal ? "show-modal" : null}`}
        id="show-info-modal"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">جزئیات</h4>
              <button
                type="button"
                className="btn-close py-0"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body position-relative">
              <form action="#" className="form row mx-0">
                <div className="form__box-input col-12 px-2">
                  <span className="fa fa-user form__icon icon-name-article"></span>
                  <input
                    type="text"
                    name=""
                    id="firstname"
                    value={`نام: ${firstname}`}
                    className="form-control form__input input-user-firstname"
                    readonly
                  />
                 
                </div>

                <div className="form__box-input col-12 px-2">
                  <span className="fa fa-users form__icon"></span>
                  <input
                    type="text"
                    name=""
                    value={`نام خانوادگی: ${lastname}`}
                    id="lastname"
                    className="form-control form__input input-user-lastname"
                    readonly
                  />
                 
                </div>

                <div className="form__box-input col-12 px-2">
                  <span className="fa fa-user form__icon"></span>
                  <input
                    lang="en"
                    type="text"
                    name=""
                    value={`نام کاربری: ${username}`}
                    id="username"
                    className="form-control form__input input-user-username"
                    readonly
                  />
                
                </div>

                <div className="form__box-input col-12 px-2">
                  <span className="fa fa-globe form__icon"></span>
                  <input
                    lang="en"
                    type="email"
                    name=""
                    value={`ایمیل: ${email}`}
                    id="email"
                    style={{borderBottom: "3px solid #41b300"}}
                    className="form-control form__input input-user-email"
                    readonly
                  />
             
                </div>

                <div className="form__box-input col-12 px-2">
                  <span className="fa fa-key form__icon"></span>
                  <input
                    type="text"
                    name=""
                    id="text"
                    value={`شهر: ${city}`}
                    className="form-control form__input input-user-password"
                    readonly
                  />
            
                </div>
                <div className="form__box-input col-12 px-2">
                  <span className="fa fa-wallet form__icon"></span>
                  <input
                    type="text"
                    name=""
                    value={`سن: ${age}`}
                    id="count-product"
                    className="form-control form__input input-user-product"
                    readonly
                  />
             
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button
                className="btn btn-danger btn-lg"
                data-bs-dismiss="modal"
                onClick={() => setIsShowModal(false)}
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      </div>
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
      
        <button className="btn-custome btn-custome__blue" onClick={() => {setIsShowModal(true)}}>اطلاعات</button>
        <button className="btn-custome btn-custome__red" onClick={removeUserHandler}>حذف</button>
      </div>
       </div>
    </>
  );
}
