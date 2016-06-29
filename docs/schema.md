# Schema Information

## gathering
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
location    | text      | not null
start_date  | datetime  | not null
end_date    | datetime  | not null
description | text      | not null
image       | string    |
price       | float     | not null
organizer_id| integer   | not null, foreign key (references users), indexed
category_id | integer   | not null, foreign key (references categories), indexed

## categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      |
image       | string    |

## gatheringCategories
column name | data type | details
------------|-----------|-----------------------
event_id    | integer   | not null, foreign key (references events), index
category_id | integer   | not null, foreign key (references categories), indexed


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
attendee_id | integer   | not null, foreign key (references users), indexed
event_id    | string    | not null, foreign key (references purchased events), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
first_name      | string    | not null, primary key
last_name       | string    | not null, primary key
avatar          | string    | not null, primary key
balance         | float     | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
