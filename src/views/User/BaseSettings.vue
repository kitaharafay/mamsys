<template>
  <el-container style="margin-left: 30px;">
    <el-form label-width="80px">
      <el-form-item label="邮箱">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="昵称">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="个人简介">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="国家地区">
        <el-select filterable placeholder="请选择" v-model="baseForm.state"></el-select>
      </el-form-item>
      <el-form-item label="所在省市">
        <el-cascader v-model="baseForm.region"></el-cascader>
      </el-form-item>
      <el-form-item label="街道地址">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">更新基本信息</el-button>
      </el-form-item>
    </el-form>
    <el-form style="margin-left:150px;">
      <el-form-item label="头像">
        <el-image style="width: 200px; height: 200px" :src="url"></el-image>
      </el-form-item>
      <el-form-item>
        <el-button icon="el-icon-upload2">上传图片</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>

<script>
export default {
  name: "BaseSettings",
  data() {
    return {
      baseForm: {
        email: null,
        name: null,
        descri: null,
        state: null,
        region: null
      },
      pageOption: {
        state: [],
        region: []
      },
      url: '../../assets/meweixin.png'
    };
  }
};
</script>

