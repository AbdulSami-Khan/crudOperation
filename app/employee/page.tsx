import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const EmployeePage = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen gap-4 mt-4'>
        <h1 className='text-4xl font-bold text-center'>CURD Operations PostgreSQL</h1>
        <Button asChild>
            <Link href={"/employee/create"}>Create</Link>
        </Button>
    </div>
  )
}

export default EmployeePage