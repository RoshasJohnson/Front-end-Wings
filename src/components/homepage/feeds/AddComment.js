import React from 'react'

function AddComment() {
  return (
    <div>
      <Modal
        className="modal-div"
        open={isopen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseOutlinedIcon
            style={{ color: "black", cursor: "pointer" }}
            onClick={handleClose}
          />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create Post
          </Typography>
          <Typography id="modal-modal-description">
            <div>
              <form onSubmit={handleSumbit}>
                <textarea
                  width="100"
                  rows={4}
                  height={150}
                  cols={50}
                  type="text"
                  className="text-input"
                  value={input}
                  placeholder="What's in your mind ?"
                  onChange={(e) => setInput(e.target.value)}
                />
                <input
                  type="file"
                  accept="image/*"
                  onClick={(e) => setImage(e.target.files[0])}
                  style={{ display: "none" }}
                  id="icon-button-file"
                />
                <div style={{ display: "flex" }}>
                  <label htmlFor="icon-button-file">
                    <PhotographIcon
                      style={{ width: "20px", color: "#1c9bf0", margin: "1px" }}
                      id="icon-button-file"
                      cursor={"pointer"}
                    />
                  </label>
                  <label htmlFor="">
                    <SearchCircleIcon
                      style={{ width: "20px", color: "#1c9bf0", margin: "1px" }}
                    />
                  </label>
                  <label htmlFor="">
                    <EmojiHappyIcon
                      style={{ width: "20px", color: "#1c9bf0", margin: "1px" }}
                      cursor={"pointer"}
                      onClick={() => setShowPicker((val) => !val)}
                    />
                    {showPicker && (
                      <Picker
                        pickerStyle={{ width: "100%" }}
                        onEmojiClick={onEmojiClick}
                      />
                    )}
                  </label>
                  <label htmlFor="">
                    <LocationMarkerIcon
                      style={{ width: "20px", color: "#1c9bf0", margin: "1px" }}
                    />
                  </label>
                  <label htmlFor="">
                    <GiftIcon
                      style={{ width: "20px", color: "#1c9bf0", margin: "1px" }}
                    />
                  </label>
                </div>
                <Button
                  style={{
                    background: "##1c9bf0 !important",
                    marginTop: "10px",
                    borderRadius: "20px",

                    float: "right",
                    color: "white",
                    fontWeight: "700",
                    textTransform: "none",
                  }}
                  onClick={handleSumbit}
                  variant="contained"
                >
                  Let's wing
                </Button>

                <img src={image} alt="" />
              </form>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default AddComment