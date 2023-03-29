

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Profil</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form method="post" action="/updateprofile/{{ Auth()->user()->id }}" enctype="multipart/form-data">
                    @method('put')
                    @csrf
                    <center>

                        @if (Auth::user()->foto == 'profile.jpg')
                            <img src="profile.jpg" width="100" height="100" style="border-radius: 50%;">
                        @else
                            <img src="{{ asset('storage/' . Auth::user()->foto) }}" width="100" height="100"
                                style="border-radius: 50%;">
                        @endif
                    </center>

                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Nama:</label>
                        <input type="text" class="form-control" id="recipient-name" name="username"
                            value="{{ Auth::user()->username }}">
                    </div>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">Email:</label>
                        <input type="email" class="form-control" id="recipient-name" name="email"
                            value="{{ Auth::user()->email }}">
                    </div>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">Profile</label>
                        <input type="file" class="form-control" id="recipient-name" name="foto"
                            value="{{ Auth::user()->foto }}">
                    </div>
                    <div class="mb-3">
                        <input type="hidden" class="form-control" id="recipient-name" name="password"
                            value="{{ Auth::user()->password }}">
                    </div>
                    <div class="mb-3">
                        <input type="hidden" class="form-control" id="recipient-name" name="role_id"
                            value="{{ Auth::user()->role_id }}">
                    </div>
                    <div class="mb-3">
                        <input type="hidden" class="form-control" id="recipient-name" name="cv"
                            value="{{ Auth::user()->cv }}">
                    </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                <button type="submit" class="btn btn-primary">Edit Data</button>
            </div>
            </form>
        </div>
    </div>
</div>
