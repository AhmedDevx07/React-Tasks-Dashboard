import Swal from "sweetalert2";

export const toast = (title, icon = "success") => {
  Swal.fire({
    title,
    icon,
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    background: "#0f172a",  
    color: "#fff",
    iconColor: icon === "success" ? "#6366f1" : "#f43f5e",  
  });
};
