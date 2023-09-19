import React from 'react'
import { Navbar } from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Shedules = () => {
    const {register, handleSubmit,formState: {errors}} =useForm()
    const navigate =  useNavigate()

    const onSubmit = async(data) => {
        try {
          
            const response = await fetch('http://127.0.0.1:8000/api/she', {
              method: 'POST',
              headers: {
                'Content-type': 'application/json'
              },
              body: JSON.stringify(data)
            })

            const patient = await response.json()
            alert("shedules registrado")
            navigate('/')


        } catch (error) {
           console.log("ESTO ES UN ERROR POR SI FALLA La API",error)
        }
    }
  return (
   <>
   <Navbar/>
   <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className='p-8 w-full'>
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1"> Form to add Shedules</div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input  
                            className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                            type="text" 
                            {...register("day_week",{ required: true })}
                            placeholder='day_week'
                            
                        />
                         {
                            errors.name && <span className="text-red-800">this is obligatory</span>
                        }
                        <input  
                            className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                            type="date" 
                            {...register("start_time",{ required: true })}
                            placeholder='start_time'
                            
                        />
                         {
                            errors.name && <span className="text-red-800">this is obligatory</span>
                        }
                        <input  
                            className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                            type="date" 
                            {...register("end_time",{ required: true })}
                            placeholder='end_time'
                            
                        />
                         {
                            errors.name && <span className="text-red-800">this is obligatory</span>
                        }
                        <input  
                            className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                            type="text" 
                            {...register("stylist_id",{ required: true })}
                            placeholder='stylist_id'
                            
                        />
                         {
                            errors.name && <span className="text-red-800">this is obligatory</span>
                        }
                        <input  
                            className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                            type="text" 
                            {...register("branches_id",{ required: true })}
                            placeholder='branches_id'
                            
                        />
                         {
                            errors.name && <span className="text-red-800">this is obligatory</span>
                        }
                        
                        
                       

                      

                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>Add service</button>
                       
                    </form>
                </div>
            </div>
        </div>
   
   
   
   </>
  )
}

export default Shedules