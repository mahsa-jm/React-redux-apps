import { useSelector, useDispatch } from 'react-redux';
import { FormRow, FormRowSelect } from '.';
import Wrapper from '../assets/wrappers/SearchContainer';
import { clearFilters, handleChange } from '../features/allJobs/allJobsSlice';

const SearchContainer = () => {
    const { isLoading , search, searchStatus, searchType, sort, sortOptions } = useSelector(store => store.allJobs);
    const { jobTypeOptions, statusOptions } = useSelector(store => store.job);

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(clearFilters());
    }
    const handleSearch = (e) => {
        if(isLoading) {
            return;
        }
        dispatch(handleChange({name: e.target.name , value: e.target.value}));
    }

    return (
        <Wrapper>
            <form className='form'>
                <h4>Search form</h4>
                <div className='form-center'>
                    <FormRow 
                       name='search'
                       type='text'
                       value={search}
                       handleChange={handleSearch}
                   />
                   <FormRowSelect
                       labelText='status'
                       name='searchStatus'
                       value={searchStatus}
                       handleChange={handleSearch}
                       list={['all', ...statusOptions]}
                   />
                   <FormRowSelect
                       labelText='type'
                       name='searchType'
                       value={searchType}
                       handleChange={handleSearch}
                       list={['all', ...jobTypeOptions]}
                   />
                   <FormRowSelect
                       name='sort'
                       value={sort}
                       handleChange={handleSearch}
                       list={sortOptions}
                   />
                   <button 
                       className='btn btn-block btn-danger'
                       disabled={isLoading}
                       onClick={handleSubmit}
                    >
                        clear filters
                    </button>
                </div>
            </form>
        </Wrapper>
    );
}

export default SearchContainer;