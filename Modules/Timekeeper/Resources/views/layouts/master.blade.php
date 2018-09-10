<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Module Timekeeper</title>

       {{-- Laravel Mix - CSS File --}}
        <link rel="stylesheet" href="{{ mix('css/timekeeper.css') }}">
        <link rel="stylesheet" href="{{ mix('css/gentelella.css') }}">

    </head>
    <body class="nav-md">
        <div class="container body">
            <div class="main_container">
                @section('header')
                    @include('timekeeper::sections.navigation')
                    @include('timekeeper::sections.header')
                @show

                @yield('left-sidebar')

                <div class="right_col" role="main">
                    <div class="page-title">
                        <div class="title_left">
                            <h1 class="h3">@yield('title')</h1>
                        </div>
                    </div>
                    @yield('content')
                </div>

                @include('timekeeper::sections.footer')
            </div>
        </div>
        <script src="http://code.jquery.com/jquery-latest.min.js"
                type="text/javascript"></script>
        {{-- Laravel Mix - JS File --}}
        <script src="{{ mix('js/timekeeper.js') }}" ></script>
        <script src="{{ mix('js/gentelella.js') }}" ></script>
    </body>
</html>
