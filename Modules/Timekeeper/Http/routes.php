<?php

Route::group(['middleware' => 'web', 'prefix' => 'timekeeper', 'namespace' => 'Modules\Timekeeper\Http\Controllers'], function()
{
    Route::get('/', 'TimekeeperController@index')->name('timekeeper.index');
});
