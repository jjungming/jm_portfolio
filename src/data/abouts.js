import {
    IoPersonOutline,
    IoCalendarOutline,
    IoCallOutline,
    IoMailOutline,
    IoLocationOutline,
    IoSchoolOutline,
} from 'react-icons/io5';
  
const abouts = [
    { icon: <IoPersonOutline />, label: '이름', value: '박정민' },
    { icon: <IoCalendarOutline />, label: '생년월일', value: '2001.10.10' },
    { icon: <IoCallOutline />, label: '위치', value: '청주시 흥덕구' },
    { icon: <IoMailOutline />, label: '연락처', value: '010-7142-1213' },
    { icon: <IoLocationOutline />, label: '이메일', value: '1010pjm@naver.com' },
    { icon: <IoSchoolOutline />, label: '학력', value: '청주대학교(인공지능소프트웨어학과)' },
];

export default abouts;