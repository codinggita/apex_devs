  import mongoose from 'mongoose';

  const {Schema} = mongoose;

  const exampleSchema = new Schema({
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  });

const ExampleModel = mongoose.model('ExampleModel', exampleSchema);

export default ExampleModel;
