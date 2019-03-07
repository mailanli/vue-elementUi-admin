 <template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="等级"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="各级经验值"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="星级">
      </el-table-column>
    </el-table>
</template>

<script src="./detailLevelJs.js"></script>