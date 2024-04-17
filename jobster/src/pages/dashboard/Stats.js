import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showStats } from "../../features/allJobs/allJobsSlice";
import { ChartsContainer, StatsContainer, Loading } from "../../components";
const Stats = () => {

    const { isLoading, monthlyApplications } = useSelector( store => store.job );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showStats())
    },[]);


    if(isLoading) {
        return <Loading center />
    }

    return <>
       <StatsContainer />
       <ChartsContainer /> 
    </>
};

export default Stats;