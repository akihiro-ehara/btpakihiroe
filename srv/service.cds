using { myproject1 as my } from '../db/schema.cds';

@path : '/service/myproject1Service'
service myproject1Service
{
    annotate TempData with @restrict :
    [
        { grant : [ '*' ], to : [ 'authenticated-user' ] },
        { grant : [ '*' ], to : [ 'SampleRole' ] }
    ];

    annotate Work with @restrict :
    [
        { grant : [ '*' ], to : [ 'authenticated-user' ] },
        { grant : [ '*' ], to : [ 'SampleRole' ] }
    ];

    entity Work as
        projection on my.Work;

    action Action1
    (
        arg1 : String(100)
    )
    returns String;

    entity TempData as
        projection on my.TempData;
}

annotate myproject1Service with @requires :
[
    'authenticated-user',
    'any',
    'SampleRole'
];
