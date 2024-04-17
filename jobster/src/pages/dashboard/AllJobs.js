import Wrapper from "../../assets/wrappers/RegisterPage";
import { FormRow } from "../../components";
import FormRowSelect from "../../components/FormRowSelect";
import { useSelector, useDispatch } from "react-redux";
import { SearchContainer, JobsContainer } from "../../components" ;


const AllJobs = () => {
    
    return <>
    <SearchContainer/>
    <JobsContainer/>
    </>

};

export default AllJobs;