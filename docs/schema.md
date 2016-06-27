# Schema Information

## events
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
location    | text      | not null
start_date  | datetime  | not null
end_date    | dateTime  | not null
image       | string    |
description | text      | not null
organizer_id| integer   | not null, foreign key (references users), indexed
price       | integer   | not null
category_id | integer   | not null, foreign key (references categories), indexed
private     | boolean   | not null, default: false

## categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | string    |

## bookmarks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
event_id    | string    | not null, foreign key (references bookmarked events), indexed

## tickets
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
event_id    | string    | not null, foreign key (references purchased events), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
