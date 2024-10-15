import {
  TAcademicManagementData,
  TQueryParams,
  TResponseRedux,
} from "../../../types";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAcademicSemester: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParams) =>
            params.append(item.name, item.value as string)
          );
        }
        return {
          url: "/academic-semesters",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (
        response: TResponseRedux<TAcademicManagementData[]>
      ) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addAcademicSemester: builder.mutation({
      query: (data) => {
        return {
          url: "/academic-semesters/create-academic-semester",
          method: "POST",
          body: data,
        };
      },
    }),
    getAllAcademicFacultiy: builder.query({
      query: () => {
        return {
          url: "/academic-faculties",
          method: "GET",
        };
      },
      providesTags: ["Faculty"],
      transformResponse: (
        response: TResponseRedux<TAcademicManagementData[]>
      ) => {
        console.log("inside redux", response);

        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addAcademicFaculty: builder.mutation({
      query: (data) => {
        return {
          url: "/academic-faculties/create-academic-faculty",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Faculty"],
    }),
    addAcademicDepertment: builder.mutation({
      query: (data) => {
        return {
          url: "/academic-departments/create-academic-department",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Depertment"],
    }),
    getAllAcademicDepertment: builder.query({
      query: () => {
        return {
          url: "/academic-departments",
          method: "GET",
        };
      },
      providesTags: ["Depertment"],
      // transformResponse: (
      //   response: TResponseRedux<TAcademicManagementData[]>
      // ) => {
      //   console.log("inside redux", response);

      //   return {
      //     data: response.data,
      //     meta: response.meta,
      //   };
      // },
    }),
  }),
});

export const {
  useGetAllAcademicSemesterQuery,
  useAddAcademicSemesterMutation,
  useAddAcademicFacultyMutation,
  useGetAllAcademicFacultiyQuery,
  useAddAcademicDepertmentMutation,
  useGetAllAcademicDepertmentQuery,
} = academicManagementApi;
