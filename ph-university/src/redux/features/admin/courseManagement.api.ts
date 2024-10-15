import {
  TCreateCourse,
  TRegisteredSemester,
  TResponseRedux,
} from "../../../types";
import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addSemesterRegistration: builder.mutation({
      query: (data) => {
        return {
          url: "/semester-registrations/create-semester-registration",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["semester"],
    }),
    addCourse: builder.mutation({
      query: (data) => {
        return {
          url: "/courses/create-course",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Course"],
    }),
    updateSemesterStatus: builder.mutation({
      query: (args) => {
        console.log("id", args.id);
        console.log("data", args.data);
        return {
          url: `/semester-registrations/${args.id}`,
          method: "PATCH",
          body: args.data,
        };
      },
      invalidatesTags: ["Course"],
    }),
    getAllRegisteredSemester: builder.query({
      query: () => {
        return {
          url: "/semester-registrations",
          method: "GET",
        };
      },
      transformResponse: (response: TResponseRedux<TRegisteredSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["semester"],
    }),
    getAllCourses: builder.query({
      query: () => {
        return {
          url: "/courses",
          method: "GET",
        };
      },
      transformResponse: (response: TResponseRedux<TCreateCourse[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["Course"],
    }),
  }),
});

export const {
  useAddSemesterRegistrationMutation,
  useGetAllRegisteredSemesterQuery,
  useUpdateSemesterStatusMutation,
  useAddCourseMutation,
  useGetAllCoursesQuery,
} = userManagementApi;
