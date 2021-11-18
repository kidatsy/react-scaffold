import { normalize, schema } from 'normalizr';

// Define your schemas here:
const user = new schema.Entity('users');
const organization = new schema.Entity('organizations', {
  users: [user],
});

const schemas = {
  user,
  users: { users: [user] },
  organization,
  organizations: [organization],
};

export const normalizeData = (data, schemaName) => normalize(data, schemas[schemaName]);
