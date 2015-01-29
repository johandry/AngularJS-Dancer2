#!/usr/bin/env perl

use strict;
use warnings;
use FindBin;
use lib "$FindBin::Bin/../lib";

use UnixWeb::API;
UnixWeb::API->to_app;
