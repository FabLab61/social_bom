package SocialBom::Example;
use encoding 'utf8';
use Mojo::Base 'Mojolicious::Controller';
use Mojo::Message::Request;
use DBI;
use Data::Dumper;

sub index {
  my $self = shift;
  $self->render();
}



sub sql_server_connect {
	my $host = "localhost"; my $port = "3306"; my $user = "root"; my $pass = "611002522"; my $db = "bom";
	my $dbh = DBI->connect("DBI:mysql:$db:$host:$port",$user,$pass) or die "Error: ". $DBI::errstr;;
  $dbh->{'mysql_enable_utf8'} = 1;
  $dbh->do("set character set utf8");
  $dbh->do("set names utf8");
	return $dbh;
}

sub new_bom {
  my $self = shift;
  my $request = $self->req;
  my $item = $request->query_params->param('item');
 
  # Render template "example/welcome.html.ep" with message
  $self->render(
    message => 'Welcome to the Mojolicious real-time web framework!',
    request => $request,
    item => $item,
    );
}

sub add_item {		# parse request and go it in db
  my $self = shift;
  my $request = $self->req;
  my $item = $request->query_params->param('item');
  my $quantity = $request->query_params->param('quantity');
  my $subsystem = $request->query_params->param('subsystem');
  my $dbh = sql_server_connect();


  # Render template "example/welcome.html.ep" with me
  $self->render(
    template => 'example/welcome',
    request => $request, 
    item => $item,
    );
}


sub test_db {
	my $self = shift;
	my $dbh = sql_server_connect();
	my $sql_query = "SELECT * FROM users";
	my $sth = $dbh->prepare($sql_query ) or die ("Cannot connect to the database: ".$DBI::errstr."\n");
	$sth->execute();
	my $hash_ref = $sth->fetchall_hashref('id');    # hash of hashes
	$sth->finish;
	$self->render(
    items => $hash_ref,
    );
}

#http://bom.fablab61.ru:3000/add?item="rails"&subsystem="gantry"


1;
