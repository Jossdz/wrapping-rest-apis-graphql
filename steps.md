# graphql wrap rest

1. Configure the base project ( apollo server ).
2. Modeling the data from the main schema to graphql typedefs.
3. Create the datasource file.
4. Create a new class extending from RESTDataSource.
5. Create methods to retrieve the data.
6. Add the datasource to you apollo server as a property (his value should be a function returning an object).
7. Modify your resolvers and main Query to be able to use the new datasource
