import { TQueryParams, TResponseRedux, TStudent } from "../../../types";
import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addStudent: builder.mutation({
      query: (data) => {
        return {
          url: "/users/create-student",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Student"],
    }),
    getAllStudent: builder.query({
      query: (args) => {
        // console.log("args", args);

        const params = new URLSearchParams();

        if (args) {
          console.log("inside args", args);

          args.forEach((item: TQueryParams) =>
            params.append(item.name, item.value as string)
          );
          console.log(params);
        }
        return {
          url: "/students",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["Student"],
      transformResponse: (response: TResponseRedux<TStudent[]>) => {
        console.log("inside redux", response);

        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getSingleStudent: builder.query({
      query: (studentId) => {
        return {
          url: `/students/${studentId}`,
          method: "GET",
        };
      },
    }),
    updateStudent: builder.mutation({
      query: ({ studentId, data }) => {
        return {
          url: `/students/${studentId}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["Student"],
    }),
    getAllFaculty: builder.query({
      query: (args) => {
        // console.log("args", args);

        const params = new URLSearchParams();

        if (args) {
          console.log("inside args", args);

          args.forEach((item: TQueryParams) =>
            params.append(item.name, item.value as string)
          );
          console.log(params);
        }
        return {
          url: "/faculties",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["Student"],
      transformResponse: (response: TResponseRedux<TStudent[]>) => {
        console.log("inside redux", response);

        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});

export const {
  useAddStudentMutation,
  useGetAllStudentQuery,
  useGetSingleStudentQuery,
  useUpdateStudentMutation,
  useGetAllFacultyQuery,
} = userManagementApi;
