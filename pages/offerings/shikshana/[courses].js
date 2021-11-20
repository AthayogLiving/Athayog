import { shikshanaCourses } from '@/components/home/ShikshanaCourses.js';
import HomeLayout from '@/components/layout/HomeLayout';

import React from 'react';

function Courses({ data }) {
     return <div>{data}</div>;
}

export default Courses;
Courses.Layout = HomeLayout;

export async function getStaticPaths() {
     const res = shikshanaCourses;
     const paths = res.map((course) => {
          return {
               params: { data: course.slug.toString() }
          };
     });

     return {
          paths,
          fallback: false
     };
}

export async function getStaticProps(context) {
     const slugName = context.params.data;
     const course = shikshanaCourses;
     const res = course.find(({ slug }) => slug === slugName);

     return {
          props: { data: res }
     };
}
