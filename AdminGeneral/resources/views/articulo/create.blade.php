@extends('layouts.plantillabase')

@section('contenido')
<h2>CREAR REGISTROS</h2>
<form action="/articulos" method="POST">
    @csrf
    <div class="mb-3">
        <label for="" class="form-label">Codigo</label>
        <input id="codigo" name="codigo" type="text" class="form-control" tabindex="1">
    </div>

    <div class="mb-3">
        <label for="" class="form-label">Descripcion</label>
        <input id="descripcion" name="descripcion" type="text" class="form-control" tabindex="2">
    </div>
    
    <div class="mb-3">
        <label for="" class="form-label">Cantidad</label>
        <input id="cantidad" name="cantidad" type="number" class="form-control" tabindex="3">
    </div> 
    
    <div class="mb-3">
        <label for="" class="form-label">Precio</label>
        <input id="precio" name="precio" type="number" step="any" value="0.00" class="form-control" tabindex="4">
    </div>    

    <a href="/articulos" class="btn btn-secondary" tabindex="5">Cancelar</a>
    <button type="submit" class="btn btn-primary" tabindex="4">Guardar</button>

</form>

@endsection